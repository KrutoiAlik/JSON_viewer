package ru.json_viewer.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import ru.json_viewer.exception.BadRequestException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Service
@Slf4j
public class JsonService {

    private static final String JSON_EXTENSION = ".json";
    private static final String JSON_FOLDER_NAME = "json_files";
    public static final String FILE_NOT_FOUND_ERROR_MSG = "File %s not found. Check the file name.";
    public static final String CHARSET_WINDOWS_1251 = "windows-1251";

    public String getJsonFileByName(String fileName) throws IOException {
        File file = ResourceUtils.getFile("classpath:" + JSON_FOLDER_NAME + File.separator + fileName + JSON_EXTENSION);
        if (file.exists()) {
            return new String(Files.readAllBytes(file.toPath()), CHARSET_WINDOWS_1251);
        } else {
            throw new BadRequestException(String.format(FILE_NOT_FOUND_ERROR_MSG, fileName));
        }
    }
}
