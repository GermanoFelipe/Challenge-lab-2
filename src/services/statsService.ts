//import { getStatsForToday } from '../repositories/statRepository';

//export const getStats = async (req, res) => {
//    if (!req.isAdmin) {
//        return res.status(403).json({ message: 'Forbidden' });
//    }
//
//    const stats = await getStatsForToday();
//    res.json(stats);
//};