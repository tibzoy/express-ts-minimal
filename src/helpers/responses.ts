import { Response } from 'express';

export default {
    _200: (res: Response, payload: any) => { res.status(200).json( { success: true, message: payload } ); },
    _400: (res: Response, payload: any) => { res.status(400).json( { success: false, message: payload } ); },
    _401: (res: Response, payload: any) => { res.status(401).json( { success: false, message: payload } ); },
    _404: (res: Response, payload: any) => { res.status(401).json( { success: false, message: payload } ); },
    _422: (res: Response, payload: any) => { res.status(422).json( { success: false, message: payload } ); },
    _500: (res: Response, payload: any) => { res.status(500).json( { success: false, message: payload } ); },
}