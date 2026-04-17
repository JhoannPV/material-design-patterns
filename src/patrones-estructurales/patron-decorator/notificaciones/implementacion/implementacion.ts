import { BaseNotification } from "../notificacion-base";
import { EmailNotification, SMSNotification } from "../tipo-notificacion";

export const notificationsDecorator = () => {
    const notificacionSimple = new BaseNotification('Hola mundo');
    console.log(notificacionSimple.send());

    const notificacionEmail = new EmailNotification(notificacionSimple);
    console.log(notificacionEmail.send());

    const notificacionSMS = new SMSNotification(notificacionSimple);
    console.log(notificacionSMS.send());

    const notificacionEmailSMS = new SMSNotification(notificacionEmail);
    console.log(notificacionEmailSMS.send());
}