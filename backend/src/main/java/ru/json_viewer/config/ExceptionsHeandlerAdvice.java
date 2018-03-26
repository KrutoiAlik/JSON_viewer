package ru.json_viewer.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;

@ControllerAdvice
@Slf4j
public class ExceptionsHeandlerAdvice {

    @ExceptionHandler({Exception.class})
    @ResponseBody
    public Object handleException(Exception e) throws Exception {
        log.error(e.toString());
        log.error(Arrays.toString(e.getStackTrace()));
        throw e;
    }
}
