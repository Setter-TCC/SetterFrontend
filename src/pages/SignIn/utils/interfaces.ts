/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginData {
  username: string,
  password: string,
}

export interface LoginResponse {
  token: string,
  user: {
    id: number,
    nome_usuario: string,
    email: string,
    senha: string,
    data_criacao: string,
    data_atualizacao: string,
    ultimo_login: string,
  }
}

export const translateLoginData = (data: any): string => {

  const loginBackData = new URLSearchParams();

  for (const key in data) {
    loginBackData.append(key, data[key]);
  }

  return loginBackData.toString();
};