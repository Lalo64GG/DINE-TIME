export type Table = {
    id: string;
    num_mesa: string;
    id_admin: string;
    imgSrc: string;
    num_sillas: string;
    createdAt: string;
    estado: boolean;
}

export type Tables = {
    mesa: Table[]
}