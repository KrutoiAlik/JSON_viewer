package ru.json_viewer.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.json_viewer.exception.BadRequestException;
import ru.json_viewer.service.JsonService;

import java.io.IOException;

import static ru.json_viewer.web.Url.*;

@RestController
@RequestMapping(path = JSON_URL)
@Slf4j
public class JsonController {

    @Autowired
    private JsonService jsonService;

    // Метод возвращает HttpStatus.OK, тем самым подтвержает наличие сервиса по адресу обращения.
    @GetMapping(value = PING_URL)
    @ResponseStatus(HttpStatus.OK)
    public void getPing() {
    }

    @GetMapping(value = FILE_URL)
    public String getJsonFile(@RequestParam(name = "fileName") String fileName) {
        try {
            return jsonService.getJsonFileByName(fileName);
        } catch (IOException ex) {
            log.error(ex.getMessage());
            throw new BadRequestException(ex.getMessage());
        }
    }
}

