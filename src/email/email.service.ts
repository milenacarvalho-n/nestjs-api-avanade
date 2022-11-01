import { Injectable } from '@nestjs/common';
import {google} from 'googleapis';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    async sendEmail(to: string, subject: string, msg: string, options: object){
        const clientID = process.env.CLIENT_ID;
        const secretKey = process.env.SECRET_KEY;
        const refreshToken = process.env.REFRESH_TOKEN;
        const redirectURI = 'https://developers.google.com/oauthplayground'
        ;
        // uma coisa é autenticação e outra coisa é autorização 
        // OAuth2 verifica se você existe e se você está autorizado a fazer issso 
        const OAuth2 = google.auth.OAuth2;

        const oAuth2Client = new OAuth2(clientID, secretKey, redirectURI);

        oAuth2Client.setCredentials({refresh_token: refreshToken});

        const accessToken = oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            logger: false,
            debug: false,
            auth: {
                type: 'OAuth2',
                user: 'nascarvalho.m@gmail.com',
                clientId: clientID,
                clientSecret: secretKey,
                refreshToken: refreshToken,
                accessToken,
            },
        });
        const mailOptions = {
            from: 'nascarvalho.m@gmail.com',
            to: to,
            subject: subject,
            html:
            `Enviando email com o NestJS + NodeJS + TypeScript + Google OAuth2 + Gmail
            <h1>${msg}</h1>`,
        };

        try{
            const result = transporter.sendMail(mailOptions);

            if(!result.reject){
                return {message: 'Email enviado com sucesso'};
            }else {
                return {message: result.reject};
            }           

        }catch(error){
            return {message: error.message};
        }
    }
}
