import { ProxyExtractRole } from "../extra-proxy-extract-role/proxy-extract-role";
import { ProxyDataService } from "../proxy-data-service";
import { RealDataService } from "../real-data-service";
import { userList } from "../user-list";

export const validateAccessProxy = () => {
    const realService = new RealDataService();

    // Primer proxy
    const proxy1 = new ProxyDataService(realService);
    console.log(proxy1.getData('admin') + "\n"); // Acceso permitido


    // Segundo proxy envolviendo al primero
    const proxy2 = new ProxyExtractRole(proxy1);
    console.log(proxy2.logging(userList[0]) + "\n"); // Usuario admin
    console.log(proxy2.logging(userList[1])); // Usuario user
}