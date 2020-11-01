import React from "react";
import { Box, Image } from "@chakra-ui/core";
export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            hobby: ["Coding", "Game", "Listening"],
            bio: `Perkenalkan nama saya adalah {NAMA_PANJANG} berumur ${new Date().getFullYear() - 2007}, duduk di kelas 8 Sekolah Menengah Pertama Swasta. Hobi saya adalah {HOBBY}, dan saya adalah kelahiran 24 Maret 2007. Zodiak saya adalah Aries, dan Mata Pelajaran yang saya suka adalah Biologi Animalia serta Algebra Linear or specific is Mathemathic. Cita-cita saya tak ada ujung titik tetap, dalam kehidupan sehari-hari saya masih mencari cita-cita dan tujuan hidup saya seorang diri. Terimakasih telah membaca, dan selamat pagi !!`
        };
    }

    render() {
        return (
            <Box className="text-center">
                <br />
                <Image rounded="full" size="250px" src="./logo512.png" />
                <br />
                <h1>Hanif Dwy Putra S</h1>
                <p className="lead">A 13 y.o learning ReactJS and Another Rest API</p>
                <br /><br />
                <h2>About Me</h2>
                <hr />
               <p className="lead">{this.state.bio.replace(/{NAMA_PANJANG}/gi, "Hanif Dwy Putra S").replace(/{KELAS}/gi, 7).replace(/{HOBBY}/gim, this.state.hobby.join(", "))} &hearts;</p>
            </Box>
        )
    }
}