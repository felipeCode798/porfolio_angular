export interface InfoPage {
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumblr?: string;
    equipo?: Equipo[];
}

export interface Equipo {
    nombre?: string;
    puesto?: string;
    redes?: Rede[];
}

export interface Rede {
    nombre?: string;
    url?: string;
}

export interface InfoPageFirebase {
    frase?: string;
    nombre?: string;
    subtitulo?: string;
    twitter?: string;
    url?: string;
}