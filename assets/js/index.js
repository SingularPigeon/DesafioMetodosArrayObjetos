//Define el objeto atención médica.
let atencion = {hora: ' ', especialista: ' ', paciente: ' ', rut: ' ', prevision: ' '}

// Define el arreglo Radiología.
const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

// Define el arreglo Traumatología.
const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

// Define el arreglo Dental.
const dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO MORENO',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// 1. Agrega nuevas atenciones a traumatología.
traumatologia.push(
  {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
  {hora: '09:30', especialista: 'MARÍA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12145451-K', prevision: 'FONASA'},
  {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
  {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
  {hora: '12:00', especialista: 'MATÍAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'},
); 
console.log(traumatologia);

// 2. Elimina y agrega la primera y última atención a radiología.
radiologia.pop()
radiologia.shift()
console.log(radiologia)

// 3. Muestra lista atenciones dentales.
let atencionesDental = ''
  for(let atencion of dental) { 
    atencionesDental += `
  <li style= "list-style-type: none;">${atencion.hora} - ${atencion.especialista} - ${atencion.paciente} - ${atencion.rut} - ${atencion.prevision}</li><br>
  `;
document.getElementById("atencionesDental").innerHTML = atencionesDental;
};

// 4. Muestra listado total de pacientes atendidos en el Centro Médico.
let listaPacientes = ''
let totalAtenciones = radiologia.concat(traumatologia, dental);
for(let atencion of totalAtenciones) {
  listaPacientes+= `
<li style= "list-style-type: none;">${atencion.paciente}</li><br>`;

}
document.getElementById("listaPacientes").innerHTML = listaPacientes;


 // 5. Filtra pacientes con previsión Isapre.
let listaIsapreDental = ''
let previsionesTipoDental = dental.filter(function(atencion) {
  return atencion.prevision === "ISAPRE";
});
for( let atencion of previsionesTipoDental) {
  listaIsapreDental+= `
  <li style= "list-style-type: none;">${atencion.paciente} - ${atencion.prevision}</li><br>`;
} 
document.getElementById("listaIsapreDental").innerHTML = listaIsapreDental

 // 6. Filtra pacientes con previsión Fonasa de traumatología.
 let listaFonasaTraumatologia = ''
 let previsionesTipoTraumatologia = traumatologia.filter(function(atencion) {
   return atencion.prevision === "FONASA";
 });
 for( let atencion of previsionesTipoTraumatologia) {
   listaFonasaTraumatologia+= `
   <li style= "list-style-type: none;">${atencion.paciente} - ${atencion.prevision}</li><br>`;
 }

document.getElementById("listaFonasaTraumatologia").innerHTML = listaFonasaTraumatologia

// Otras estadisticas.
document.write("<h2>Otras Estadisticas</h2>");
// Muestra el largo de los arreglos.
document.write(`<p style= "background-color: #c9f5edfa;" >Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p style= "background-color: #c9f5edfa;" >Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p style= "background-color: #c9f5edfa;" >Cantidad de atenciones para Dental: ${dental.length}</p>`);

// Muestra la primera y la última atención de las diferentes especialidades.
document.write(`<p style= "background-color: #c9f5edfa;" >Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p style= "background-color: #c9f5edfa;" >Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p style= "background-color: #c9f5edfa;" >Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
