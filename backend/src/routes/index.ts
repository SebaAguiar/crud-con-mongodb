import { Router } from 'express';
import fs from 'fs'
import { removeExtencion } from '../utils/functions';
import path from 'path';

const router = Router()
const PATH_NAME = __dirname

fs.readdirSync(PATH_NAME).filter(file => {
  const name = removeExtencion(file) 
  if(name !== 'index'){
    console.log(`CARGANDO RUTA: ${name}`)
    const modulePath = path.join(PATH_NAME, file);
    router.use(`/${name}`, async() =>( await import(modulePath)))
  }
})

export default router
