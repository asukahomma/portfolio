package com.asukahomma.portfolio.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/files")
public class FileController {
	@GetMapping("/downloadResume")
    public ResponseEntity<Resource> downloadFile()
            throws Exception {
        Path path = Path.of("src/main/resources/static/files/asukahomma_resume.pdf");
        Resource resource = new ClassPathResource("static/files/asukahomma_resume.pdf");
        return ResponseEntity.ok()
                .contentType(getContentType(path))
                .contentLength(resource.contentLength())
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    private MediaType getContentType(Path path) throws IOException {
        try {
            return MediaType.parseMediaType(Files.probeContentType(path));
        } catch (IOException e) {
            return MediaType.APPLICATION_OCTET_STREAM;
        }
    }

}
