export interface FormInputData {
  adminName: string,
  adminEmail: string,
  adminPhone: string,
  adminUsername: string,
  adminPassword: string,
  teamName: string,
  teamCnpj: string,
  teamEmail: string,
  teamSuit: number,
  coachName: string,
  coachEmail: string,
  coachPhone: string,
  coachCref: string,
}

export interface BackendData {
  administrador: {
    nome: string;
    email: string;
    telefone: string;
    nome_usuario: string;
    senha: string;
  };
  time: {
    nome: string;
    naipe: number;
    cnpj?: string;
    email: string;
  };
  treinador?: {
    nome: string;
    email: string;
    telefone: string;
    cref?: string;
  };
}

export function translateFormData(formData: FormInputData): BackendData {
  let translatedData: BackendData = {
    administrador: {
      nome: formData.adminName,
      email: formData.adminEmail,
      telefone: formData.adminPhone,
      nome_usuario: formData.adminUsername,
      senha: formData.adminPassword,
    },
    time: {
      nome: formData.teamName,
      naipe: Number(formData.teamSuit) || 1,
      cnpj: formData.teamCnpj || '',
      email: formData.teamEmail,
    },
  };

  if (formData.coachName) {
    translatedData = {
      ...translatedData,
      treinador: {
        nome: formData.coachName,
        email: formData.coachEmail,
        telefone: formData.coachPhone,
        cref: formData.coachCref || '',
      },
    };
  }
  return translatedData;
}
