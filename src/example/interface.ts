interface INameInfo {
    firstName: string,
    lastName: string,
    [prop: string]: any
}

/*const getFullName = ({firstName, lastName}: {firstName:string,lastName:string}) => {
    return `${firstName}${lastName}`
};*/
const getFullName = ({firstName, lastName}: INameInfo) => {
    return `${firstName}${lastName}`
}
getFullName({firstName: 'AHa', lastName: 'Du', size: 12});

interface IAnimal {

}
