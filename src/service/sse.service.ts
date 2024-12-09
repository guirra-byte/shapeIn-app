import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class SseService {
  constructor() {}
  connect(url: string): Observable<any> {
    const eventSrc = new EventSource(url);
    return new Observable((observer) => {
      eventSrc.onmessage = (event) => {
        observer.next(event);
      };

      eventSrc.onerror = (error) => {
        observer.error(error);
        eventSrc.close();
      };

      return () => {
        eventSrc.close();
      };
    });
  }
}
