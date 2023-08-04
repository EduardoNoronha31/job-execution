import { groupJobs } from "./Services/Jobs";

console.log(
  groupJobs([
    {
      id: 1,
      description: "Importação de arquivos de fundos",
      deadline: "2024-02-04 12:00:00",
      estimated_hours: 8,
    },
    {
      id: 2,
      description: "Importação de dados da Base Legada",
      deadline: "2021-02-04 12:00:00",
      estimated_hours: 4,
    },
    {
      id: 3,
      description: "Importação de dados",
      deadline: "2025-02-02 12:00:00",
      estimated_hours: 6,
    },
    {
      id: 4,
      description: "Desenvolver historia 745",
      deadline: "2025-02-02 12:00:00",
      estimated_hours: 2,
    },
    {
      id: 5,
      description: "Gerar QRCode",
      deadline: "2020-02-15 12:00:00",
      estimated_hours: 6,
    },
    {
      id: 6,
      description: "Importação de dados de integração",
      deadline: "2020-02-15 12:00:00",
      estimated_hours: 8,
    },
    {
      id: 7,
      description: "Ajuste de dados de integração",
      deadline: "2023-09-6 12:36:00",
      estimated_hours: 4,
    },
    {
      id: 8,
      description: "Remoção de dados inativos",
      deadline: "2023-09-13 12:36:00",
      estimated_hours: 1,
    },
    {
      id: 9,
      description: "Atualizando dados de integração",
      deadline: "2023-09-12 12:36:00",
      estimated_hours: 3,
    },
  ])
);
