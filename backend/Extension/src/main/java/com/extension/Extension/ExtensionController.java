package com.extension.Extension;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/extension")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class ExtensionController {
    private final ExtensionService extensionService;


    @PostMapping("/process")
    public ResponseEntity<String> processContent(@RequestBody ExtensionRequest request) {
        String result = extensionService.processContent(request);
        return ResponseEntity.ok(result);
    }
}
