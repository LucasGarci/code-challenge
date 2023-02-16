import { v1 as uuidv1 } from 'uuid';

const randomDate = () => {
    const startDate = new Date(2022, 8, 15)
    const now = new Date()
    const newRandomDate = new Date(startDate.getTime() + Math.random() * (now.getTime() - startDate.getTime()))
    return newRandomDate.toLocaleDateString();
}

export const createRandomMetric = () => {
    const randomValue = () => Math.floor(Math.random() * 100);
    const newMetric = {
        id: uuidv1(),
        date: randomDate(),
        modulesUsed: randomValue(),
        usageTime: randomValue(),
        group: 2
    }
    return newMetric
}