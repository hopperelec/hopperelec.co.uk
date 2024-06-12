package uk.co.hopperelec.mc;

import java.util.logging.Logger;

// You can find out more about Demonetized SMP in /Minecraft
public final class DemonetizedSMP {
    @Override
    public void onEnable() {
        final Logger logger = getLogger();
        logger.info("For Demonetized SMP, I developed 5 different plugins.");

        // https://github.com/hopperelec/Graves
        logger.info("Graves: Put all your items into a chest minecart when you die");

        // https://github.com/hopperelec/dSMP-AntiMountain
        logger.info("dSMP-AntiMountain: Prevented some specific mountains in the dSMP map from being broken through");

        // https://github.com/hopperelec/JoinProtection
        logger.info("JoinProtection: Made sure people can only play when a moderator is online");

        // https://github.com/hopperelec/NametagHider
        logger.info("NametagHider: Added a command to toggle nametag visibility");

        // https://github.com/hopperelec/EnderGrief
        logger.info("EnderGrief: Prevented endermen from taking or placing blocks");
    }
}