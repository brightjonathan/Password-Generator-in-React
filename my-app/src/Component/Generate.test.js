import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Generator from './Generator'


//tested the password 
test("headerRenders", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("password1")

    expect(headerid.textContent).toBe("")
})



//tested the password length (input)  both render and fireEvent method
test("password length ", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("input_a")

    expect(headerid.value).toBe("20")
})

test("password length", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("input_a")

    fireEvent.change(headerid, {
        target: {
            value: "5"
        }
    })

    expect(headerid.value).toBe("5")
})

//uppercase
test("uppercase ", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("input_b")

    expect(headerid.value).toBe("on")
})

test("uppercase", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("input_b")

    fireEvent.change(headerid, {
        target: {
            value: true
        }
    });

    expect(headerid.value).toBe('true')
})

//lowercase
//numbers
//symbols


//generate password
test("Generate_password ", ()=>{
    const Compound = render(<Generator />)
    const headerid = Compound.getByTestId("generate_pw")

    expect(headerid.value).toBe("")
})


//testing if the changing password length value and clicking on generate password works correctly
test("generate btn with password length", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("generate_pw")
    const counter1 = Compound.getByTestId("password1")
    const input1 = Compound.getByTestId("input_a")
   
    fireEvent.change(input1, {
        target: {
            value: "10"
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})

//testing if the changing uppercase value and clicking on generate password works correctly
test("generate btn with uppercase", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("generate_pw")
    const counter1 = Compound.getByTestId("password1")
    const input1 = Compound.getByTestId("input_b")
   
    fireEvent.change(input1, {
        target: {
            value: false
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})


//testing if the changing lowercase value and clicking on generate password works correctly
test("generate btn with lowercase", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("generate_pw")
    const counter1 = Compound.getByTestId("password1")
    const input1 = Compound.getByTestId("input_c")
   
    fireEvent.change(input1, {
        target: {
            value: true
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})


//testing if the changing numbers value and clicking on generate password works correctly
test("generate btn with numbers", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("generate_pw")
    const counter1 = Compound.getByTestId("password1")
    const input1 = Compound.getByTestId("input_d")
   
    fireEvent.change(input1, {
        target: {
            value: true
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})

//testing if the changing symbols value and clicking on generate password works correctly
test("generate btn with symbols", ()=>{
    const Compound = render(<Generator/>)
    const headerid = Compound.getByTestId("generate_pw")
    const counter1 = Compound.getByTestId("password1")
    const input1 = Compound.getByTestId("input_e")
   
    fireEvent.change(input1, {
        target: {
            value: false
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("")
})



