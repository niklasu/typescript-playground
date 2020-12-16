import { Logger } from "tslog";

const log: Logger = new Logger();
log.info("I am a info log.");
log.error("I am a error log.");
log.fatal("I am a fatal log.");
log.debug("I am a silly log.");