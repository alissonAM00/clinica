
const radiologia = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-2", prevision: "Fonasa" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "Isapre" },
    { hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa" },
];

//Eliminar primer y ultimo paciente 
radiologia.shift();
radiologia.pop();



const traumatologia = [
    { hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "FERNANDO WURTHZ", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "MARIA ARRIAGADA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "ALEJANDRO BADILLA", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
    { hora: "12:00", especialista: "CECILIA BUDNIK", paciente: "ECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" },
];

//agregar pacientes con metodo push 

traumatologia.push(
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: " MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA  POBLETE", rut: "14345656-6", prevision: "FONASA" },
);
// Ordenar las horas
traumatologia.sort(function(a, b) {
    // Convertir las horas a minutos para comparar
    let horaA = parseInt(a.hora.split(":")[0]) * 60 + parseInt(a.hora.split(":")[1]);
    let horaB = parseInt(b.hora.split(":")[0]) * 60 + parseInt(b.hora.split(":")[1]);
    // Comparar las horas en minutos
    return horaA - horaB;
  });

const dental = [
    { hora: "08:30", especialista: "Andrea Zuñiga", paciente: "Marcela Retamal", rut: "11123425-6", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "Maria Pia Zañartu", paciente: "Angel Muñoz", rut: "9878789-2", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "Scarlett Witting", paciente: "Mario Kast", rut: "7998789-5", prevision: "FONASA" },
    { hora: "13:00", especialista: "Francico von tubber", paciente: "Karin Fernandez", rut: "18887662-K", prevision: "FONASA" },
    { hora: "13:30", especialista: "Eduardo viñuela", paciente: "Hugo Sanchez", rut: "17665461-4", prevision: "FONASA" },
    { hora: "14:00", especialista: "Raquel villaseca", paciente: "Ana Sepulveda", rut: "14441281-0", prevision: "ISAPRE" },
];

//Obtener el primer y último objeto del array

let atencionRadio = document.getElementById("radiologia");
let atencionTrauma = document.getElementById("traumatologia");
let atencionDental = document.getElementById("dental");
let tablaRadiologia = document.getElementById("tablaRadiologia");
let tablaTraumatologia = document.getElementById("tablaTraumatologia");
let tablaDental = document.getElementById("tablaDental");

atencionRadio.innerText = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}| Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`

atencionTrauma.innerText = `Primera atención: ${traumatologia[0].paciente} - ${radiologia[0].prevision}| Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`

atencionDental.innerText = `Primera atención: ${dental[0].paciente} - ${radiologia[0].prevision}| Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`

for (let index = 0; index < radiologia.length; index++) {
    tablaRadiologia.innerHTML +=
        `<tr>
    <td>${radiologia[index].hora}</td>
    <td>${radiologia[index].especialista}</td>
    <td>${radiologia[index].paciente}</td>
    <td>${radiologia[index].rut}</td>
    <td>${radiologia[index].prevision}</td>   
  </tr>`
}

for (let index = 0; index < traumatologia.length; index++) {
    tablaTraumatologia.innerHTML +=
        `<tr>
    <td>${traumatologia[index].hora}</td>
    <td>${traumatologia[index].especialista}</td>
    <td>${traumatologia[index].paciente}</td>
    <td>${traumatologia[index].rut}</td>
    <td>${traumatologia[index].prevision}</td>   
  </tr>`
}

for (let index = 0; index < dental.length; index++) {
    tablaDental.innerHTML +=
        `<tr>
    <td>${dental[index].hora}</td>
    <td>${dental[index].especialista}</td>
    <td>${dental[index].paciente}</td>
    <td>${dental[index].rut}</td>
    <td>${dental[index].prevision}</td>   
  </tr>`
};
//
//lista de pacientes 

let atenciones = radiologia.concat(traumatologia, dental) 
atenciones.map(function(atencion){
  let paciente = atencion.paciente
document.getElementById("pacientes").innerHTML += `<p><li>${paciente}</li></p>`

})
//dental prevision trauma prevision

function filtrarPorPrevision(arreglo, prevision){
    return arreglo.filter(atencion => atencion.prevision == prevision);
}
let previsionDental = filtrarPorPrevision(dental, "ISAPRE");
for (const atencion of previsionDental) {
    let valores = Object.values(atencion);
    document.getElementById("prevision-dental").innerHTML += `<li>${valores.join (" - ")} </li>`;
   
}

let previsionTrauma = filtrarPorPrevision(traumatologia, "FONASA");
for (const atencion of previsionTrauma) {
    let valores = Object.values(atencion);
    document.getElementById("prevision-trauma").innerHTML += `<li>${valores.join (" - ")} </li>`;
   
}


document.getElementById("pacientesRadiologia").innerHTML += `<p>Radiología: ${radiologia.length}</p>`;
document.getElementById("pacientesTraumatologia").innerHTML += `<p>Traumatología: ${traumatologia.length}</p>`;
document.getElementById("pacientesDental").innerHTML += `<p>Dental: ${dental.length}</p>`;

