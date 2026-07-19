import BaseModel from "./base.model";

export default class Report extends BaseModel {
  resultado: string;
  cultivo: string;
  problema: string;
  causa: string;
  confianza: string;
  resumen: string;
  porQueSucede: string;
  recomendaciones: string;
  manejoSugerido: string;
  comoMejorarLaSalud: string;
  seguimiento: string;
  raw: string;
  userId: string;

  constructor({
    id,
    resultado,
    cultivo,
    problema,
    causa,
    confianza,
    resumen,
    porQueSucede,
    recomendaciones,
    manejoSugerido,
    comoMejorarLaSalud,
    seguimiento,
    raw,
    userId,
  }: {
    id: string;
    resultado: string;
    cultivo: string;
    problema: string;
    causa: string;
    confianza: string;
    resumen: string;
    porQueSucede: string;
    recomendaciones: string;
    manejoSugerido: string;
    comoMejorarLaSalud: string;
    seguimiento: string;
    raw: string;
    userId: string;
  }) {
    super(id);
    this.resultado = resultado;
    this.cultivo = cultivo;
    this.problema = problema;
    this.causa = causa;
    this.confianza = confianza;
    this.resumen = resumen;
    this.porQueSucede = porQueSucede;
    this.recomendaciones = recomendaciones;
    this.manejoSugerido = manejoSugerido;
    this.comoMejorarLaSalud = comoMejorarLaSalud;
    this.seguimiento = seguimiento;
    this.raw = raw;
    this.userId = userId;
  }
}
