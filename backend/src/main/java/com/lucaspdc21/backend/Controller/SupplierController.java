package com.lucaspdc21.backend.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api/suppliers")
public class SupplierController {

    @RequestMapping(value = "/hello/{n}", method = RequestMethod.GET)
    @ResponseBody
    public String HelloCliente ( @PathVariable("n") String name) {
        return String.format("Hello %s", name);
    }
}
