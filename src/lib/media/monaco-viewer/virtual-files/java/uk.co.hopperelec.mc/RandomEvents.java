package uk.co.hopperelec.mc;

import java.util.logging.Logger;

public final class RandomEvents {
    @Override
    public void onEnable() {
        final Logger logger = getLogger();
        logger.info("RandomEvents is my most complex Minecraft plugin.");
        logger.info("It was originally a datapack for skyblock, building on PhoenixSC's RandomItemSkyblock by adding more types of events which can occur and randomizing item drops.");
        logger.info("This plugin is a more generalized and maintainable version of that datapack, with plenty more features.");
        // https://github.com/hopperelec/RandomEventsPlugin
    }
}
