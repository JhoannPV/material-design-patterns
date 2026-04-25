import { DataService } from "../data-service";
import { User } from "../user-list";

export class ProxyExtractRole implements DataService {
    constructor(private service: DataService) { }

    private extractRole(user: User): string {
        return user.role.trim();
    }

    logging(user: User): string {
        const role = this.extractRole(user);
        return this.getData(role);
    }

    getData(userRole: string): string {
        if (userRole) {
            return this.service.getData(userRole);
        }
        return "Acceso denegado: no se pudo extraer el rol del usuario.";
    }
}