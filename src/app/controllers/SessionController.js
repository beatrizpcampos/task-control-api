class SessionController {
    async store(request, response) {
        const isValid = await schema.isValid(request.body)

        if (!isValid) {
            return response.status(401).json({ error: 'make sure your email or password are correct' })
        }
        
        return response.json({ message: 'session'})
    }
}

export default new SessionController()