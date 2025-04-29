import { TouchableOpacity } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export const GoToPreviousButton = () => {
    return(
        <TouchableOpacity activeOpacity={0.85}>
          <FontAwesome6 name={'backward'} size={24} color={'black'}/>
        </TouchableOpacity>
    )
}
export const PlayPauseButton = () => {
  const isPlaying = false;
    return(
        <TouchableOpacity>
          <FontAwesome6 name={isPlaying ? 'pause' : 'play'} size={25} color={'black'}/>
        </TouchableOpacity>
    )
}
export const GoToNextButton = () => {
    return(
        <TouchableOpacity activeOpacity={0.85}>
          <FontAwesome6 name={'forward'} size={24} color={'black'}/>
        </TouchableOpacity>
    )
}