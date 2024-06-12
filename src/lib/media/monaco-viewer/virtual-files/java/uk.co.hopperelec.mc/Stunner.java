package uk.co.hopperelec.mc;

import java.util.logging.Logger;

public final class Stunner {
    @Override
    public void onEnable() {
        final Logger logger = getLogger();
        logger.info("Stunner is the first API I made. It comes with a command to stun players (preventing them from moving), but was designed for use by other plugins");
        // https://github.com/hopperelec/Stunner/
    }
}