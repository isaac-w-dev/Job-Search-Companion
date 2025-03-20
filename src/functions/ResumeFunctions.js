const changeHandler = (e, setter, getter) => {
    setter((getter) => ({
        ...getter, [e.target.name]: !getter[e.target.name]
    }))
}
export { changeHandler }