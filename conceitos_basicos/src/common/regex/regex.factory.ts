import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OnlyLowerCaseLettersRegex } from './only-lowercase-letters.regex';
import { RemoveSpacesRegex } from './remove-spaces.regex';
import { RegexProtocol } from './regex.protocol';
export type ClassNames = 'OnlyLowercaseLettersRegex' | 'RemoveSpacesRegex';
@Injectable()
export class RegexFactory {
  create(className: ClassNames): RegexProtocol {
    // Meu código/lógica
    switch (className) {
      case 'OnlyLowercaseLettersRegex':
        return new OnlyLowerCaseLettersRegex();
      case 'RemoveSpacesRegex':
        return new RemoveSpacesRegex();
      default:
        throw new InternalServerErrorException(
          `No class found for ${className}`,
        );
    }
  }
}
