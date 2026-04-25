import { DataService } from "../data-service";

export class ProxyDataService implements DataService {
    constructor(private service: DataService) { }

    private normalizeRole(userRole: string): string {
        return userRole.trim().toLowerCase();
    }

    private checkAccess(userRole: string): boolean {
        console.log("Verificando acceso...");

        const normalizedRole = this.normalizeRole(userRole);

        if (normalizedRole !== "admin") {
            return false;
        }

        return true;
    }

    getData(userRole: string): string {
        if (this.checkAccess(userRole)) {
            return this.service.getData(userRole);
        }
        return "Acceso denegado: solo los administradores pueden acceder a estos datos.";
    }
}