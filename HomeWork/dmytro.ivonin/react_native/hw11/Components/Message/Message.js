import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import ImgDefault from './default.png';
import ImgAradiaMegido from './Aradia.Megido.png';
import ImgEquiusZahhak from './Equius.Zahhak.png';
import ImgEridanAmpora from './Eridan.Ampora.png';
import ImgGamzeeMakara from './Gamzee.Makara.png';
import ImgKanayaMaryam from './Kanaya.Maryam.png';
import ImgNepetaLeijon from './Nepeta.Leijon.png';
import ImgSolluxCaptor from './Sollux.Captor.png';
import ImgTavrosNitram from './Tavros.Nitram.png';
import ImgEereziPyrope from './Terezi.Pyrope.png';
import ImgVriskaSerket from './Vriska.Serket.png';

export default class Message extends Component {

    getAvatarByEmail(from) {
        switch(from) {
            case 'aradia.megido@email.com': return ImgAradiaMegido;
            case 'equius.zahhak@email.com': return ImgEquiusZahhak;
            case 'eridan.ampora@email.com': return ImgEridanAmpora;
            case 'gamzee.makara@email.com': return ImgGamzeeMakara;
            case 'kanaya.maryam@email.com': return ImgKanayaMaryam;
            case 'nepeta.leijon@email.com': return ImgNepetaLeijon;
            case 'sollux.captor@email.com': return ImgSolluxCaptor;
            case 'tavros.nitram@email.com': return ImgTavrosNitram;
            case 'terezi.pyrope@email.com': return ImgEereziPyrope;
            case 'vriska.serket@email.com': return ImgVriskaSerket;
            default:
                return ImgDefault;
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image source={this.getAvatarByEmail(this.props.from)} />
                <View style={{justifyContent: 'center', marginStart: 10, marginEnd: 30}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 80}}>From:</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail">{this.props.from}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 80}}>Sender:</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail">{this.props.sender}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 80}}>Title:</Text>
                        <Text numberOfLines={1}>{this.props.title}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{width: 80}}>Message:</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail">{this.props.text}</Text>
                    </View>
                </View>
            </View>
        );
    }
}