export class ConfiguracionApp {
    private static instancia: ConfiguracionApp;

    private constructor(
        public tema: string,
        public idioma: string,
    ) { }

    public static obtenerInstancia(): ConfiguracionApp {
        if (!ConfiguracionApp.instancia) {
            ConfiguracionApp.instancia = new ConfiguracionApp("claro", "es");
        }

        return ConfiguracionApp.instancia;
    }
}