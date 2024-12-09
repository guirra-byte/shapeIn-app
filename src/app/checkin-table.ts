import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ImportsModule } from "./imports";
import { SseService } from "@service/sse.service";
import axios from "axios";

interface Column {
  field: string;
  header: string;
}

interface CheckIn {
  email: string;
  name: string;
  status: string;
  arrived_at: string;
  stage: string;
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

@Component({
  selector: "table-responsive-stack-demo",
  templateUrl: "checkin-table.html",
  standalone: true,
  imports: [ImportsModule],
  providers: [SseService],
})
export class CheckInTable implements OnInit {
  sseHandshake: boolean = false;
  qrCodesToGen: number = 0;
  checkins: CheckIn[] = [];
  cols!: Column[];

  // Open/Close Add User Dialog;
  name!: string;
  email!: string;
  stage!: string;
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  saveInfos() {
    if (this.name && this.email && this.stage) {
      const checkin = {
        name: this.name,
        email: this.email,
        stage: this.stage,
        arrived_at: "",
        status: "AUSENTE",
      };

      this.checkins.push(checkin);
      this.qrCodesToGen += 1;

      this.cdr.detectChanges();
      this.clearInfos();
    }
  }

  showToast() {}
  sendToBackend() {
    const data = this.checkins.filter(
      (checkin) => checkin.status !== "PRESENTE"
    );

    if (data) {
      axios
        .post("http://localhost:8888/checkin/add-user", data)
        .catch((error) => console.error(error));
    }
  }

  clearInfos() {
    this.name = "";
    this.email = "";
    this.stage = "";
    this.cdr.detectChanges();
  }

  constructor(
    private _sseService: SseService,
    private cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    const currentServiceBackendUrl = "http://localhost:8888/checkin/events";
    this._sseService.connect(currentServiceBackendUrl).subscribe({
      next: (incomming_data) => {
        if (this.sseHandshake) {
          const parseData: CheckIn[] = JSON.parse(incomming_data.data);
          this.checkins = parseData.map((data) => {
            const date = formatDate(new Date(data.arrived_at));
            return { ...data, arrived_at: date };
          });

          this.cdr.detectChanges();
          this.qrCodesToGen -= 1;
        }

        const regex = /Connection has been stablished!/;
        if (regex.test(incomming_data.data)) {
          console.log("SSE Handshake has been maked!");
          this.sseHandshake = true;
        }
      },
      error: (err) => console.log(err),
    });

    this.cols = [
      { field: "name", header: "Nome" },
      { field: "stage", header: "Turma" },
      { field: "status", header: "Status" },
      { field: "checkin", header: "Horário" },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case "PRESENTE":
        return "success";
      case "AUSENTE":
        return "warning";
      case "FALTA":
        return "danger";
    }
  }
}
