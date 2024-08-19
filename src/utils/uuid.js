function s4() {
    return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);
}

export const getUuid = () => {
    return s4()+s4();
}