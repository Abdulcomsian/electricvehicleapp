/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors, TextFamily, Images} from '@constants';
import {Buttons, Inputs, Modal} from '@components';
import hooks from '@hooks';
type iosModal = {setVisibility: Function};
const MoreRegDetScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {bottom} = useSafeAreaInsets();
  const [KBHeight] = hooks.useKeyboard();
  const modalRef1 = useRef<iosModal>(null);
  const [androidModal1, setAndroidModal1] = useState<'car' | 'location' | null>(
    null,
  );
  console.log('KBH', KBHeight);
  const onClose = () => {
    setAndroidModal1(null);
    modalRef1.current?.setVisibility(false);
  };
  return (
    <View style={[styles.screenContain, {paddingBottom: bottom}]}>
      <View style={styles.screenContainInner}>
        <Progress.Bar
          height={3.5}
          progress={0.8}
          width={wp(100) - 50}
          color={Colors.green}
          unfilledColor={Colors.lightGrey2}
          borderWidth={0}
          useNativeDriver={true}
        />
        <View style={styles.HeaderSec}>
          <Text style={styles.textA}>Almost Done...</Text>
        </View>
        <View style={styles.HeaderSecA}>
          <Text style={styles.textC}>
            We need some more information to complete your registration
          </Text>
        </View>
        <SpecialBtnView
          title="Location"
          icon={Images.location}
          onPress={() => {
            modalRef1.current?.setVisibility(true);
            setAndroidModal1('location');
          }}
        />
        <SpecialBtnView
          title="Car"
          icon={Images.car}
          onPress={() => {
            //Platform.OS === 'ios'
            modalRef1.current?.setVisibility(true);
            setAndroidModal1('car');
          }}
        />
        <Buttons.RoundedBtn
          onPress={() => {
            navigation.navigate('tabs');
          }}
          //disabled={true}
          style={{marginTop: 24}}>
          Finish!
        </Buttons.RoundedBtn>
      </View>
      <Modal
        ref={modalRef1}
        transparent={false}
        onRequestClose={() => {
          setAndroidModal1(null);
          return true;
        }}
        visible={Boolean(androidModal1)}
        animationType="fade">
        {androidModal1 === 'location' ? (
          <LocationCard onClose={onClose} />
        ) : (
          <CarCard onClose={onClose} />
        )}
      </Modal>
    </View>
  );
};
const SpecialBtnView = ({
  icon,
  title,
  onPress = () => {},
  checked = false,
}: {
  icon: any;
  title: string;
  onPress?: Function;
  checked?: Boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.specialBtnView}
      onPress={() => onPress()}>
      <View style={styles.specialBtnViewDecView}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.specialBtnViewTitle}>{title}</Text>
        {checked && <Image source={Images.tickGreen} style={styles.tickIcon} />}
      </View>
      <View style={styles.specialBtnViewAddView}>
        <Text style={styles.specialBtnViewAddText}>Add+</Text>
      </View>
    </TouchableOpacity>
  );
};
const CarCard = ({onClose = () => {}}: {onClose?: Function}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.rowify}>
        <TouchableOpacity onPress={() => onClose()}>
          <Image source={Images.greenBack} style={styles.backImage} />
        </TouchableOpacity>
        <View style={styles.jrowify}>
          <Image source={Images.car} style={styles.icon} />
          <Text style={styles.modalHeaderText}>Add Car</Text>
        </View>
        <Text style={styles.greenClose} onPress={() => onClose()}>
          Close
        </Text>
      </View>
      <Inputs.MaterialInputA
        placeholder="Car Modal"
        style={styles.textInputCard}
      />
      <Inputs.MaterialInputA
        placeholder="Car Color"
        style={styles.textInputCard}
      />
      <Inputs.MaterialInputA
        placeholder="Vehicle Registration Number"
        style={styles.textInputCard}
      />
      <DropDownPicker
        ArrowUpIconComponent={() => (
          <Image
            source={Images.ddArrow}
            style={[styles.ddBtn, {transform: [{rotate: '180deg'}]}]}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image source={Images.ddArrow} style={styles.ddBtn} />
        )}
        style={styles.ddView}
        textStyle={styles.ddPlaceHolder}
        placeholder="Select Connector Type"
        open={open}
        listMode={'MODAL'}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Buttons.RoundedBtn onPress={() => {}}>Add</Buttons.RoundedBtn>
    </View>
  );
};
const LocationCard = ({onClose = () => {}}: {onClose?: Function}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.rowify}>
        <TouchableOpacity onPress={() => onClose()}>
          <Image source={Images.greenBack} style={styles.backImage} />
        </TouchableOpacity>
        <View style={styles.jrowify}>
          <Image source={Images.location} style={styles.icon} />
          <Text style={styles.modalHeaderText}>Add Location</Text>
        </View>
        <Text style={styles.greenClose} onPress={() => onClose()}>
          Close
        </Text>
      </View>
      <Inputs.MaterialInputA placeholder="Address" />
      <View style={styles.jrowify}>
        <Inputs.MaterialInputA
          placeholder="City/Province"
          style={[styles.textInputCard, {width: '48%'}]}
        />
        <Inputs.MaterialInputA
          placeholder="Postcode"
          style={[styles.textInputCard, {width: '48%'}]}
        />
      </View>
      <Inputs.MaterialInputA placeholder="State" style={styles.textInputCard} />
      <DropDownPicker
        ArrowUpIconComponent={() => (
          <Image
            source={Images.ddArrow}
            style={[styles.ddBtn, {transform: [{rotate: '180deg'}]}]}
          />
        )}
        ArrowDownIconComponent={() => (
          <Image source={Images.ddArrow} style={styles.ddBtn} />
        )}
        style={styles.ddView}
        textStyle={styles.ddPlaceHolder}
        placeholder="Select a Country"
        open={open}
        listMode={'MODAL'}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Buttons.RoundedBtn onPress={() => {}}>Add</Buttons.RoundedBtn>
    </View>
  );
};
const styles = StyleSheet.create({
  modalHeaderText: {
    color: Colors.darkPurple,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    fontFamily: TextFamily.HELVETICA_BLACK,
  },
  greenClose: {fontSize: 16, color: Colors.green},
  ddBtn: {width: 18, height: 18, resizeMode: 'contain'},
  ddView: {
    height: 48,
    backgroundColor: Colors.lightGrey1,
    borderRadius: 12,
    borderColor: Colors.muted,
    marginTop: 10,
    marginBottom: 50,
  },
  ddPlaceHolder: {
    fontFamily: TextFamily.HELVETICA,
    color: Colors.muted,
    paddingLeft: 5,
  },

  specialBtnView: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(100) - 50,
    backgroundColor: Colors.lightGrey1,
    borderRadius: 12,
    marginVertical: 16,
    paddingRight: 12,
    paddingLeft: 21,
  },
  specialBtnViewTitle: {color: Colors.darkPurple},
  specialBtnViewDecView: {flexDirection: 'row', alignItems: 'center'},
  specialBtnViewAddView: {
    height: 32,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.green,
    marginVertical: 8,
  },
  specialBtnViewAddText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: TextFamily.HELVETICA,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
  },

  screenContain: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 25,
  },
  LoginText: {
    color: Colors.green,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    fontFamily: TextFamily.HELVETICA,
  },
  loginText: {
    fontSize: Platform.OS === 'ios' ? 12 : 13,
    fontFamily: TextFamily.HELVETICA,
    marginBottom: 46,
    lineHeight: 18,
    marginRight: 50,
  },
  HeaderSecA: {
    marginTop: 35,
    justifyContent: 'center',
    width: 300,
    alignSelf: 'center',
    marginBottom: 60,
  },
  textC: {
    fontFamily: TextFamily.HELVETICA,
    fontSize: Platform.OS === 'ios' ? 16 : 17,
    textAlign: 'center',
    color: Colors.muted,
    lineHeight: 25,
  },
  HeaderSec: {
    marginTop: 35,
    justifyContent: 'center',
  },
  textInput: {marginVertical: 16, height: 48},
  textInputCard: {marginVertical: 8, height: 48},
  screenContainInner: {flex: 1, paddingBottom: 80},
  textA: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: TextFamily.HELVETICA_BLACK,
  },
  infoSect: {
    height: 90,
    width: 180,
    marginBottom: 40,
  },
  jrowify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35,
    height: 56,
  },
  tickIcon: {width: 25, height: 25, resizeMode: 'contain', marginLeft: 10},
  icon: {width: 18, height: 18, resizeMode: 'contain', marginRight: 5},
  container: {flex: 1, backgroundColor: Colors.white, padding: 20},
  backImage: {
    width: 20,
    height: 20,
    transform: [{rotate: '180deg'}],
  },
});
export default MoreRegDetScreen;
