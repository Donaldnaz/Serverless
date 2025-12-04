var messages = [
    "Drilling down into data!",
    "Full stream ahead – upstream, midstream, downstream!",
    "Exploring new energy horizons!",
    "Pumping up innovation!",
    "Striking digital oil!",
    "Refining the future!",
    "On a seismic shift of success!",
    "Fueling the cloud transformation!",
    "Wells of opportunity ahead!",
    "Gushing with insights!"
];

export const handler = async (event, context) => {
    let message = messages[Math.floor(Math.random() * messages.length)];
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message }),
    };
    return response;
};
