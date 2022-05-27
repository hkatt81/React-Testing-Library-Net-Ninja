const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Jane",
                    last: "Smith"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/39.jpg"
                },
                login: {
                    username: "blackfrog99"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
