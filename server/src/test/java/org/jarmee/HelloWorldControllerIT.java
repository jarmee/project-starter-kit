package org.jarmee;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
public class HelloWorldControllerIT {

    @Autowired
    MockMvc mockMvc;
    
    @Test 
    public void helloWorld() throws Exception {
        mockMvc.perform(get("/hello/world"))
               .andExpect(status().isOk())
               .andExpect(content().string("Hello World"));
    }
}