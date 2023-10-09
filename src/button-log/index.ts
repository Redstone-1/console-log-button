import { Colors, DefaultButton, Description } from '../decorators';
import { transStyleToString, genButtonTemplate } from '../utils';
import { ButtonLog, ButtonConfig, Color } from '../types';

@Colors()
@Description('ButtonLog')
class ButtonLogImpl implements ButtonLog {
  public colors?: Color;
  public description?: string;

  @DefaultButton()
  defineButtonLog (config: ButtonConfig[] = []) {
    try {
      const contentArr: string[] = [];
      const styles = config?.length
        ? config.map((item: ButtonConfig) => {
            const { content, ...rest } = item || {};
            contentArr.push(content);
            return transStyleToString(rest);
          })
        : [];
      return [
        genButtonTemplate(contentArr),
        ...styles,
      ];
    } catch (error) {
      console.error('error', error);
      return [];
    }
  }
}

export default ButtonLogImpl;

const buttonLog = new ButtonLogImpl();

export const defineButtonLog = buttonLog.defineButtonLog;
