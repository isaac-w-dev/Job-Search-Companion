const changeHandler = (e, setter, getter) => {
    setter((getter) => ({
        ...getter, [e.target.name]: !getter[e.target.name]
    }))
}
const handleButtonNavigate = (navigate, route) => {
    navigate(route)
}
export { changeHandler, handleButtonNavigate }