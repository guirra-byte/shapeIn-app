# Check-in Application 🚀

> [!CAUTION]
> Esta aplicação de Check-in **utiliza um sistema de atualizações em tempo real via Server-Sent Events (SSE) para notificar assim que participante realizar o checkin no evento/aula tendo seu qrcode escaneado**. 

![image](https://github.com/user-attachments/assets/68b1a6c8-5d5e-4e45-9492-4e3a8567214a)


## Recursos Principais
- [x] **Atualizações em tempo real**: Utiliza SSE para transmitir eventos ao frontend sempre que um QR Code é escaneado. <br>
- [x] **QR Code dinâmico**: Cada QR Code é gerado com base em uma URL que contém o ID do usuário como query parameter, permitindo identificar o usuário ao escanear. <br>
- [x] **Gestão de check-ins**: Atualiza as informações de chegada do usuário no sistema após o escaneamento do QR Code.
      
## Tecnologias Utilizada
**`Backend (Fastify)`**: <br>
* **Fastify** <br>
* **TypeScript** <br>
* **Node.Js**
* **Server-Sent Events** (SSE): Para transmitir dados em tempo real. <br><br>

**`Frontend (Angular)`**:
* **Angular**.
* **TypeScript**.
* **PrimeNG**.
* **SSE Client**: Comunicação em tempo real com o backend.
  
## Fluxo da Aplicação
### 1. Gerar o QR Code:
> Backend cria uma URL que contém o ID do usuário como query parameter (https://example.com/checkin?id=<user_id>). <br>
> Um QR Code é gerado com base nessa URL e enviado para o frontend.

### 2. Escanear o QR Code:
> O QR Code é escaneado por um scanner ou câmera. <br>
> A URL com o ID do usuário é enviada para o backend.

### 3. Atualizar o Check-in:
> O backend atualiza o status de chegada do usuário no banco de dados. <br>
> Uma notificação em tempo real é enviada via SSE para o frontend.

### 4. Notificar o Frontend:
> A interface do Angular recebe a notificação e exibe a atualização em tempo real.

https://github.com/user-attachments/assets/bd073450-4136-4c10-bab2-60be78fc6154

<hr>
