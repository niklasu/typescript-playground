import { Logger } from "tslog";

const log: Logger = new Logger();
log.fatal("I am a fatal log.");
log.error("I am a error log.");
log.info("I am a info log.");
log.debug("I am a silly log.");
log.silly("I am a silly log.");