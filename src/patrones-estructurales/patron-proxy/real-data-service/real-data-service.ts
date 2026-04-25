import { DataService } from "../data-service";

export class RealDataService implements DataService {
    findData(userRole: string): string {
        if (userRole) {
            return 'Datos sensibles del servidor';
        }
        return "Acceso denegado: no se proporcionó un rol de usuario válido.";
    }

    getData(userRole: string): string {
        return this.findData(userRole);
    }
}