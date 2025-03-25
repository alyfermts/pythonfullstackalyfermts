
class Hotel {
    constructor(nomeHotel, cidade, quartosDisponiveisHotel) {
        this.nomeHotel = nomeHotel;
        this.cidade = cidade;
        this.quartosDisponiveisHotel = quartosDisponiveisHotel;
        this.historicoReservas = []; 
    }

    reservarQuarto(cliente) {
        
        if (this.quartosDisponiveisHotel > 0) {
            this.quartosDisponiveisHotel--; 
            
            this.historicoReservas.push({
                cliente: cliente.nomeCliente,
                cpf: cliente.cpfCliente,
                data: new Date().toLocaleString() 
            });
            console.log(`Reserva confirmada para ${cliente.nomeCliente} no ${this.nomeHotel}.`);
            return true; 
        } else {
            console.log("Não foi possível realizar a reserva. Quartos indisponíveis.");
            return false;
        }
    }

    cancelarReserva(cliente) {
        
    
        console.log(`Reserva cancelada para ${cliente.nomeCliente}.`);
        this.quartosDisponiveisHotel++; 
        
    }
}
class Cliente {
    constructor(nomeCliente, cpfCliente) {
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
        this.historicoReservas = []; 
    }

    adicionarReserva(hotel) {
        
        this.historicoReservas.push({
            hotel: hotel.nomeHotel,
            data: new Date().toLocaleString() 
        });
    }

    visualizarHistorico() {
        
        console.log(`Histórico de Reservas de ${this.nomeCliente}:`);
        if (this.historicoReservas.length === 0) {
            console.log("Nenhuma reserva encontrada.");
        } else {
            this.historicoReservas.forEach(reserva => {
                console.log(`- Hotel: ${reserva.hotel}, Data: ${reserva.data}`);
            });
        }
    }
}


const hotel1 = new Hotel("Hotel cristo vive", "Rio de Janeiro");
const cliente1 = new Cliente("alyfer mateus", "232.455.789-22");


if (hotel1.reservarQuarto(cliente1)) {
    cliente1.adicionarReserva(hotel1); 
}

cliente1.visualizarHistorico();