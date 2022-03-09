import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import XLSX from "xlsx";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function ExportDataToExcel(props) {
  // Created Sample data
  const DoBoth = async () => {
    var wscols = [
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 }, // "pixels"
    ];
    var wsrows = [
      { hpx: 16 }, // "pixels"
    ];
    let tempData = [props.Header, { Comment: props.Comment }];
    props.Lines.forEach((Line) => {
      if (Line !== undefined) {
        let tempLine = {};
        if (Line.Line.Name !== undefined) {
          tempLine.Name = Line.Line.Name;
          tempData.push({ Name: tempLine.Name });
        }
        if (Line.Line.Occ !== undefined) {
          tempLine.Occ = Line.Line.Occ;
          tempData.push({ Occ: tempLine.Occ });
        }
        if (Line.Line.Hrs !== undefined) {
          tempLine.Hrs = Line.Line.Hrs;
          tempData.push({ Hrs: tempLine.Hrs });
        }
        if (Line.Line.PU !== undefined) {
          tempLine.PU = Line.Line.PU;
          tempData.push({ PU: tempLine.PU });
        }
        if (Line.Line.Rig !== undefined) {
          tempLine.Rig = Line.Line.Rig;
          tempData.push({ Rig: tempLine.Rig });
        }
        if (Line.Line.PD !== undefined) {
          tempLine.PD = Line.Line.PD;
          tempData.push({ PD: tempLine.PD });
        }
        if (Line.Line.EquipNum !== undefined) {
          tempLine.EquipNum = Line.Line.EquipNum;
          tempData.push({ EquipNum: tempLine.EquipNum });
        }
        if (Line.Line.EquipDesc !== undefined) {
          tempLine.EquipDesc = Line.Line.EquipDesc;
          tempData.push({ EquipDesc: tempLine.EquipDesc });
        }
      }
    });
    var ws = XLSX.utils.json_to_sheet(tempData);
    var wb = XLSX.utils.book_new();
    ws["!cols"] = wscols;
    ws["!rows"] = wsrows;
    XLSX.utils.book_append_sheet(wb, ws, "Cities");
    const wbout = XLSX.write(wb, {
      type: "base64",
      bookType: "xlsx",
    });
    const uri = FileSystem.cacheDirectory + "cities.xlsx";
    await FileSystem.writeAsStringAsync(uri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Sharing.shareAsync(uri, {
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      dialogTitle: "MyWater data",
      UTI: "com.microsoft.excel.xlsx",
    });
  };

  return (
    <View style={styles.newJob} key={1}>
      <TouchableOpacity
        key={1}
        underlayColor="#fff"
        style={styles.SubBtn}
        onPress={() => DoBoth()}
        title="New Job"
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.15,
  },
  Text: {
    color: "white",
  },
  textInputTest: {
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  newJob: {
    width: "95%",
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "green",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  temp: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
  },
  tempText: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
    marginLeft: "50%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
  },
  SubBtn: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
