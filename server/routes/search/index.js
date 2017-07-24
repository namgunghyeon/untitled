function search(router) {
    router.get('/', (req, res) => {
        res.send('search');
    });
    return router;
}

export default {
    search,
};
