//Responsável por ativar (active) o menu em uso e tira o active do restante
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
} 