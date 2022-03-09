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
      { wpx: 50 },
      { wpx: 75 },
      { wpx: 100 },
    ];
    var wsrows = [{ hpx: 16 }, { hpx: 16 }, { hpx: 16 }, { hpx: 16 }];
    let tempData = [props.Header];
    let tempDataThree = [];
    tempDataThree.Comment = props.Comment;
    var ws = XLSX.utils.json_to_sheet(tempData);
    var wb = XLSX.utils.book_new();
    XLSX.utils.sheet_add_json(ws, [], { origin: -1 });
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Name",
          "Occ",
          "Hrs.",
          "P/U",
          "Rig",
          "P/D",
          "Equip No.",
          "Equip Description",
        ],
      ],
      { origin: -1 }
    );
    let tmp = 3;
    props.Lines.forEach((Line) => {
      tmp++;
      if (Line !== undefined) {
        let tempLine = [];
        if (Line.Line.Name !== undefined) {
          tempLine.push(Line.Line.Name);
          //tempLine.Name = Line.Line.Name;
        } else {
          tempLine.push("");
        }
        if (Line.Line.Occ !== undefined) {
          tempLine.push(Line.Line.Occ);
          // tempLine.Occ = Line.Line.Occ;
        } else {
          tempLine.push("");
        }
        if (Line.Line.Hrs !== undefined) {
          tempLine.push(Line.Line.Hrs);
          //tempLine.Hrs = Line.Line.Hrs;
        } else {
          tempLine.push("");
        }
        if (Line.Line.PU !== undefined) {
          tempLine.push(Line.Line.PU);
          //tempLine.PU = Line.Line.PU;
        } else {
          tempLine.push("");
        }
        if (Line.Line.Rig !== undefined) {
          tempLine.push(Line.Line.Rig);
          // tempLine.Rig = Line.Line.Rig;
        } else {
          tempLine.push("");
        }
        if (Line.Line.PD !== undefined) {
          tempLine.push(Line.Line.PD);
          //tempLine.PD = Line.Line.PD;
        } else {
          tempLine.push("");
        }
        if (Line.Line.EquipNum !== undefined) {
          tempLine.push(Line.Line.EquipNum);
          // tempLine.EquipNum = Line.Line.EquipNum;
        } else {
          tempLine.push("");
        }
        if (Line.Line.EquipDesc !== undefined) {
          tempLine.push(Line.Line.EquipDesc);
          //tempLine.EquipDesc = Line.Line.EquipDesc;
        } else {
          tempLine.push("");
        }
        XLSX.utils.sheet_add_aoa(ws, [tempLine], { origin: -1 });
        /*tempDataTwo.push({
          Name: tempLine.Name,
          Occ: tempLine.Occ,
          Hrs: tempLine.Hrs,
          PU: tempLine.PU,
          Rig: tempLine.Rig,
          PD: tempLine.PD,
          EquipNum: tempLine.EquipNum,
          EquipDesc: tempLine.EquipDesc,
        });*/
      }
    });
    //tempData.push({ Comment: props.Comment });
    XLSX.utils.sheet_add_json(ws, [], { origin: -1 });
    XLSX.utils.sheet_add_json(ws, [tempDataThree], { origin: -1 });
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
