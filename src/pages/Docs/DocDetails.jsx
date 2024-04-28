import './Style.css'
const DocDetails = () => {
    
  return (
    <div>
    <div className="card_details">
        <h2 > What is Arduino Uno? </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, impedit laboriosam. Iure architecto magni tenetur perferendis voluptatibus. Quam sed cumque recusandae inventore perferendis voluptas pariatur vitae tempore? Aliquam, magni eveniet.</p>
    </div>
    <div className='img_style'>
    <img className='author_img' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGNBuKZS2dQ8gViURYxqj0ih63BJgwf4e1KAPzMc1AyYVjDkc_" alt="React Image" />
       <div className='author_name'>
       <h6>Akber Ali Khan.</h6>
       <p>6  min read.Feb 5,2024</p>
       </div>
    </div>
    <div className='arduino_img'>
    <img className='img_continer' src="https://m.media-amazon.com/images/I/71z22cRPeeL._AC_UF1000,1000_QL80_.jpg" alt="React Image" />
    <p>Arduino Uno</p>
    </div>
    <div className='doc_details'>
    <h1>Arduino Uno </h1><p>The Arduino UNO is a standard board of Arduino. Here UNO means one in Italian. It was named as UNO to label the first release of Arduino Software. It was also the first USB board released by Arduino. It is considered as the powerful board used in various projects. Arduino.cc developed the Arduino UNO board.

Arduino UNO is based on an ATmega328P microcontroller. It is easy to use compared to other boards, such as the Arduino Mega board, etc. The board consists of digital and analog Input/Output pins (I/O), shields, and other circuits.

The Arduino UNO includes 6 analog pin inputs, 14 digital pins, a USB connector, a power jack, and an ICSP (In-Circuit Serial Programming) header. It is programmed based on IDE, which stands for Integrated Development Environment. It can run on both online and offline platforms.
The IDE is common to all available boards of Arduino.<h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, rem?</h3> Lets discuss each component in detail.

ATmega328 Microcontroller- It is a single chip Microcontroller of the ATmel family. The processor code inside it is of 8-bit. It combines Memory (SRAM, EEPROM, and Flash), Analog to Digital Converter, SPI serial ports, I/O lines, registers, timer, external and internal interrupts, and oscillator.
ICSP pin - The In-Circuit Serial Programming pin allows the user to program using the firmware of the Arduino board.

Power LED Indicator- The ON status of LED shows the power is activated. When the power is OFF, the LED will not light up.
Digital I/O pins- The digital pins have the value HIGH or LOW. The pins numbered from D0 to D13 are digital pins.

TX and RX LED s- The successful flow of data is represented by the lighting of these LED s.
AREF- The Analog Reference (AREF) pin is used to feed a reference voltage to the Arduino UNO board from the external power supply.
Reset button- It is used to add a Reset button to the connection.
USB- It allows the board to connect to the computer. It is essential for the programming of the Arduino UNO board.
Crystal Oscillator- The Crystal oscillator has a frequency of 16MHz, which makes the Arduino UNO a powerful board.
Voltage Regulator- The voltage regulator converts the input voltage to 5V.
GND- Ground pins. The ground pin acts as a pin with zero voltage.
Vin- It is the input voltage.
Analog Pins- The pins numbered from A0 to A5 are analog pins. The function of Analog pins is to read the analog sensor used in the connection. It can also act as GPIO (General Purpose Input Output) pins. </p>
    </div>
    </div>
    
  )
}

export default DocDetails